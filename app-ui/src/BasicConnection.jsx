import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

function BasicConnection() {
    const engine = createEngine();
    const node1 = new DefaultNodeModel({
        name: 'Node 1',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100,100);
    let port1 = node1.addOutPort('Out');

    const node2 = new DefaultNodeModel({
        name: 'Node 2',
        color: 'rgb(0,192,255)',
    });
    node2.setPosition(100,100);
    let port2 = node2.addOutPort('Out');

    const link = port1.link<DefaultLinkModel>(port2);
    link.addLabel('Hello World');

    const model = new DiagramModel();
    model.addAll(node1, node2, link);
    engine.setModel(model);

    return <CanvasWidget engine={engine} />;
}

export default BasicConnection;
