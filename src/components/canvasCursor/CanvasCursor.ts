import { useEffect } from "react";

interface OscillatorConfig {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

interface LineConfig {
  spring: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface CanvasContext extends CanvasRenderingContext2D {
  running?: boolean;
  frame?: number;
}

interface Environment {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(config: OscillatorConfig = {}) {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }

  value(): number {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class Line {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(config: LineConfig) {
    this.spring = config.spring + 0.1 * Math.random() - 0.02;
    this.friction = environment.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];
    for (let i = 0; i < environment.size; i++) {
      const node: Node = { x: position.x, y: position.y, vx: 0, vy: 0 };
      this.nodes.push(node);
    }
  }

  update() {
    let spring = this.spring;
    let node = this.nodes[0];
    node.vx += (position.x - node.x) * spring;
    node.vy += (position.y - node.y) * spring;
    for (var i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * environment.dampening;
        node.vy += prevNode.vy * environment.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= environment.tension;
    }
  }

  draw(ctx: CanvasContext) {
    ctx.beginPath();
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
    for (let i = 1; i < this.nodes.length - 1; i++) {
      const node = this.nodes[i];
      const nextNode = this.nodes[i + 1];
      const midX = 0.5 * (node.x + nextNode.x);
      const midY = 0.5 * (node.y + nextNode.y);
      ctx.quadraticCurveTo(node.x, node.y, midX, midY);
    }
    const lastNode = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(lastNode.x, lastNode.y, lastNode.x, lastNode.y);
    ctx.stroke();
    ctx.closePath();
  }
}

const environment: Environment = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

const position = { x: 0, y: 0 };
let lines: Line[] = [];
let ctx: CanvasContext;
let oscillator: Oscillator;

const useCanvasCursor = () => {
  const onMouseMove = (e: MouseEvent | TouchEvent) => {
    const initLines = () => {
      lines = [];
      for (let i = 0; i < environment.trails; i++) {
        lines.push(
          new Line({ spring: 0.4 + (i / environment.trails) * 0.025 })
        );
      }
    };

    const updatePosition = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e) {
        position.x = e.touches[0].pageX;
        position.y = e.touches[0].pageY;
      } else {
        position.x = e.clientX;
        position.y = e.clientY;
      }
      e.preventDefault();
    };

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchstart", onMouseMove);
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("touchmove", updatePosition);
    document.addEventListener("touchstart", updatePosition);
    updatePosition(e);
    initLines();
    render();
  };

  const render = () => {
    if (ctx.running) {
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = `hsla(${Math.round(
        oscillator.update()
      )}, 50%, 50%, 0.2)`;
      ctx.lineWidth = 1;
      for (const line of lines) {
        line.update();
        line.draw(ctx);
      }
      ctx.frame!++;
      requestAnimationFrame(render);
    }
  };

  const resizeCanvas = () => {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  };

  const renderCanvas = () => {
    ctx = (document.getElementById("canvas") as HTMLCanvasElement).getContext(
      "2d"
    ) as CanvasContext;
    ctx.running = true;
    ctx.frame = 1;
    oscillator = new Oscillator({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onMouseMove);
    document.body.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", () => {
      if (!ctx.running) {
        ctx.running = true;
        render();
      }
    });
    window.addEventListener("blur", () => {
      ctx.running = false;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchstart", onMouseMove);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener("blur", () => {
        ctx.running = false;
      });
    };
  }, []);
};

export default useCanvasCursor;
