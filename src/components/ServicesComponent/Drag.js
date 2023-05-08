import { useEffect, useRef } from 'react';
// import "./styles.css";
import Matter  from 'matter-js';
import img from '../../assets/Group 8.png';

function Scene() {
  const sceneRef = useRef(null);
  useEffect(() => {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create(),
      world = engine.world;

    // create a renderer
    var render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 1,
        wireframes: false,
      },
    });

    // create bounds
    var ground = Bodies.rectangle(
      window.innerWidth / 2 + 160,
      window.innerHeight + 67 ,
      window.innerWidth + 320,
      200,
      { render: { fillStyle: '#ffff' }, isStatic: true }
    );
    var wallLeft = Bodies.rectangle(
      -80,
      window.innerHeight / 2,
      300,
      window.innerHeight,
      { render: { fillStyle: '#ffff' }, isStatic: true }
    );
    var wallRight = Bodies.rectangle(
      window.innerWidth + 80,
      window.innerHeight + 80,
      window.innerWidth + 320,
      260,
      { render: { fillStyle: '#ffff' }, isStatic: true }
    );
    var roof = Bodies.rectangle(
      window.innerWidth / 2 + 160,
      -80,
      window.innerWidth + 320,
      160,
      { render: { fillStyle: '#ffff' }, isStatic: true }
    );

    // object colors & variables

    var radius = 20;

    // create objects

    // art & design
    var illustration = Bodies.rectangle(70, 500, 133, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: img,
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var art = Bodies.rectangle(35, 460, 56, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: img,
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var threeD = Bodies.rectangle(90, 460, 52, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: img,
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var graphic = Bodies.rectangle(60, 420, 105, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: img,
          xScale: 1,
          yScale: 1,
        },
      },
    });
    var photo = Bodies.rectangle(50, 380, 86, 40, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: img,
          xScale: 1,
          yScale: 1,
        },
      },
    });
    // video
 

    // Original Shape
    // var illustration = Bodies.rectangle(70, 500, 133, 40, {render: { fillStyle: arts}, chamfer: {radius: 20}})

    // add all of the bodies to the world
    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      illustration,
      art,
      threeD,
      graphic,
      photo,
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: true,
          },
        },
      });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // Allow page scrolling in matter.js window
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouse.mousewheel
    );

    // Detect clicks vs. drags
    let click = false;

    document.addEventListener('mousedown', () => (click = true));
    document.addEventListener('mousemove', () => (click = false));


    // Create a On-Mouseup Event-Handler
    Events.on(mouseConstraint, 'mouseup', function (event) {
      var mouseConstraint = event.source;
      var bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (let i = 0; i < bodies.length; i++) {
          var body = bodies[i];
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              var bodyUrl = body.url;
             
              // Hyperlinking feature
              if (bodyUrl !== undefined) {
                //window.location.href = bodyUrl;
                window.open(bodyUrl, '_blank');
               
              }
              break;
            }
          }
        }
      }
    });

    // run the engine
    Matter.Runner.run(engine);

    // run the renderer
    Render.run(render);
  });

  return <div ref={sceneRef} />;
}

export default Scene;
