import React from 'react';
import '../App.css'
import createEngine, { DefaultNodeModel, DiagramModel } from '@projectstorm/react-diagrams'

import { CanvasWidget } from '@projectstorm/react-canvas-core'

const Diagram = () => {
    const engine = createEngine();
    const node1 = new DefaultNodeModel({
        name: 'Source',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100,100);
    let port1 = node1.addOutPort('Out');

    const node2 = new DefaultNodeModel({
        name: 'Destination',
        color: 'rgb(0,192,255)',
    });
    node2.setPosition(50,50);
    let port2 = node2.addInPort('Out');

    const link = port1.link(port2);
    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    engine.setModel(model);

    return <CanvasWidget engine={engine} className='App'/>
}

export default Diagram;
