import React, { useMemo } from 'react';
import {
    ReactFlow,
    Background,
    useNodesState,
    useEdgesState,
    Handle,
    Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './StructureMindMap.css';

const CustomNode = ({ data }) => {
    const getNodeClass = () => {
        switch (data.nodeType) {
            case 'center': return 'node-center';
            case 'primary': return 'node-primary';
            case 'safe': return 'node-safe';
            case 'warning': return 'node-warning';
            case 'danger': return 'node-danger';
            default: return 'node-neutral';
        }
    };

    return (
        <div className={`custom-node ${getNodeClass()}`}>
            <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
            <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
            <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
            <Handle type="target" position={Position.Bottom} style={{ opacity: 0 }} />
            {data.label}
            <Handle type="source" position={Position.Top} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
            <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
        </div>
    );
};

const nodeTypes = { custom: CustomNode };

const StructureMindMap = ({ mindMapData }) => {
    const { initialNodes, initialEdges } = useMemo(() => {
        const nodes = [];
        const edges = [];

        nodes.push({
            id: 'center',
            type: 'custom',
            position: { x: 300, y: 180 },
            data: { label: mindMapData.center.label, nodeType: 'center' },
        });

        const primaryPositions = [
            { x: 80, y: 40 },
            { x: 520, y: 40 },
            { x: 560, y: 180 },
            { x: 520, y: 320 },
            { x: 80, y: 320 },
        ];

        mindMapData.primaryNodes.forEach((node, index) => {
            nodes.push({
                id: node.id,
                type: 'custom',
                position: primaryPositions[index],
                data: { label: node.label, nodeType: 'primary' },
            });

            edges.push({
                id: `edge-center-${node.id}`,
                source: 'center',
                target: node.id,
                type: 'straight',
                style: { stroke: '#64748b', strokeWidth: 2 },
            });
        });

        const secondaryOffsets = {
            landlord: [{ x: -100, y: -50 }, { x: -100, y: 20 }],
            tenant: [{ x: 100, y: -50 }, { x: 100, y: 20 }],
            insurance: [{ x: -100, y: -20 }, { x: -100, y: 50 }],
        };

        Object.entries(mindMapData.secondaryNodes).forEach(([parentId, children]) => {
            if (parentId === 'property') return;
            const parentNode = nodes.find(n => n.id === parentId);
            if (!parentNode) return;

            const offsets = secondaryOffsets[parentId] || [];
            children.forEach((child, index) => {
                const offset = offsets[index] || { x: 0, y: (index + 1) * 50 };
                nodes.push({
                    id: child.id,
                    type: 'custom',
                    position: { x: parentNode.position.x + offset.x, y: parentNode.position.y + offset.y },
                    data: { label: child.label, nodeType: child.status },
                });

                const edgeColor = child.status === 'danger' ? '#ef4444' : child.status === 'safe' ? '#22c55e' : '#94a3b8';
                edges.push({
                    id: `edge-${parentId}-${child.id}`,
                    source: parentId,
                    target: child.id,
                    type: 'straight',
                    style: { stroke: edgeColor, strokeWidth: 2 },
                });
            });
        });

        const propertyChildren = mindMapData.secondaryNodes.property || [];
        propertyChildren.forEach((child, index) => {
            nodes.push({
                id: child.id,
                type: 'custom',
                position: { x: 300, y: 290 + index * 45 },
                data: { label: child.label, nodeType: child.status },
            });

            const edgeColor = child.status === 'safe' ? '#22c55e' : '#94a3b8';
            edges.push({
                id: `edge-center-${child.id}`,
                source: 'center',
                target: child.id,
                type: 'straight',
                style: { stroke: edgeColor, strokeWidth: 2 },
            });
        });

        return { initialNodes: nodes, initialEdges: edges };
    }, [mindMapData]);

    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div className="mindmap-card card">
            <div className="card-header">
                <div className="card-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                    </svg>
                </div>
                <h2 className="card-title">전세 구조 마인드맵</h2>
                <div className="legend">
                    <span className="legend-item"><span className="dot safe"></span>안전</span>
                    <span className="legend-item"><span className="dot warning"></span>주의</span>
                    <span className="legend-item"><span className="dot danger"></span>위험</span>
                </div>
            </div>
            <div className="mindmap-flow">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    fitView
                    proOptions={{ hideAttribution: true }}
                >
                    <Background color="#e2e8f0" gap={20} />
                </ReactFlow>
            </div>
        </div>
    );
};

export default StructureMindMap;
