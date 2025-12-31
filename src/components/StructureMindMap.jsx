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

// 통합 네트워크 노드
const CenterNode = ({ data }) => (
    <div className="network-node center">
        <Handle type="source" position={Position.Top} style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Bottom} style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
        <span>{data.label}</span>
    </div>
);

const PrimaryNode = ({ data }) => (
    <div className={`network-node primary ${data.type || ''}`}>
        <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
        <Handle type="target" position={Position.Bottom} style={{ opacity: 0 }} />
        <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
        <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Top} id="top" style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0 }} />
        <Handle type="source" position={Position.Right} id="right" style={{ opacity: 0 }} />
        <span>{data.label}</span>
    </div>
);

const DetailNode = ({ data }) => (
    <div className={`network-node detail ${data.status || ''}`}>
        <Handle type="target" position={Position.Top} style={{ opacity: 0 }} />
        <Handle type="target" position={Position.Bottom} style={{ opacity: 0 }} />
        <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
        <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
        <span>{data.label}</span>
    </div>
);

const nodeTypes = {
    center: CenterNode,
    primary: PrimaryNode,
    detail: DetailNode,
};

const StructureMindMap = ({ mindMapData }) => {
    const { initialNodes, initialEdges } = useMemo(() => {
        const nodes = [
            // 중앙 노드 (부동산)
            { id: 'property', type: 'center', position: { x: 350, y: 200 }, data: { label: mindMapData.center.label } },

            // 1차 노드 (주요 관계자)
            { id: 'landlord', type: 'primary', position: { x: 100, y: 50 }, data: { label: '임대인', type: 'person' } },
            { id: 'tenant', type: 'primary', position: { x: 600, y: 50 }, data: { label: '임차인', type: 'person' } },
            { id: 'agent', type: 'primary', position: { x: 100, y: 350 }, data: { label: '중개사', type: 'org' } },
            { id: 'insurance', type: 'primary', position: { x: 600, y: 350 }, data: { label: '보증기관', type: 'org' } },

            // 2차 노드 (세부 정보)
            { id: 'owner-status', type: 'detail', position: { x: 0, y: 0 }, data: { label: '실소유자 확인', status: 'safe' } },
            { id: 'mortgage', type: 'detail', position: { x: 0, y: 100 }, data: { label: '근저당 2억', status: 'warning' } },

            { id: 'deposit', type: 'detail', position: { x: 700, y: 0 }, data: { label: '보증금 3.5억', status: 'neutral' } },
            { id: 'move-in', type: 'detail', position: { x: 700, y: 100 }, data: { label: '전입신고 필수', status: 'danger' } },

            { id: 'license', type: 'detail', position: { x: 0, y: 300 }, data: { label: '중개사 등록 확인', status: 'safe' } },

            { id: 'hug', type: 'detail', position: { x: 700, y: 300 }, data: { label: 'HUG 미가입', status: 'danger' } },
            { id: 'sgi', type: 'detail', position: { x: 700, y: 400 }, data: { label: 'SGI 미가입', status: 'danger' } },

            // 부동산 세부
            { id: 'market', type: 'detail', position: { x: 350, y: 350 }, data: { label: '시세 9억', status: 'neutral' } },
            { id: 'ratio', type: 'detail', position: { x: 350, y: 420 }, data: { label: '전세가율 41%', status: 'safe' } },
        ];

        const edges = [
            // 중앙 → 1차
            { id: 'e-p-landlord', source: 'property', target: 'landlord', type: 'straight', style: { stroke: '#64748b', strokeWidth: 2 } },
            { id: 'e-p-tenant', source: 'property', target: 'tenant', type: 'straight', style: { stroke: '#64748b', strokeWidth: 2 } },
            { id: 'e-p-agent', source: 'property', target: 'agent', type: 'straight', style: { stroke: '#64748b', strokeWidth: 2 } },
            { id: 'e-p-insurance', source: 'property', target: 'insurance', type: 'straight', style: { stroke: '#64748b', strokeWidth: 2 } },

            // 임대인 세부
            { id: 'e-l-owner', source: 'landlord', target: 'owner-status', type: 'straight', style: { stroke: '#22c55e', strokeWidth: 1.5 } },
            { id: 'e-l-mort', source: 'landlord', target: 'mortgage', type: 'straight', style: { stroke: '#f59e0b', strokeWidth: 1.5 } },

            // 임차인 세부
            { id: 'e-t-dep', source: 'tenant', target: 'deposit', type: 'straight', style: { stroke: '#94a3b8', strokeWidth: 1.5 } },
            { id: 'e-t-move', source: 'tenant', target: 'move-in', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 1.5 } },

            // 중개사 세부
            { id: 'e-a-lic', source: 'agent', target: 'license', type: 'straight', style: { stroke: '#22c55e', strokeWidth: 1.5 } },

            // 보증기관 세부
            { id: 'e-i-hug', source: 'insurance', target: 'hug', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 1.5 } },
            { id: 'e-i-sgi', source: 'insurance', target: 'sgi', type: 'straight', style: { stroke: '#ef4444', strokeWidth: 1.5 } },

            // 부동산 세부
            { id: 'e-p-market', source: 'property', target: 'market', type: 'straight', style: { stroke: '#94a3b8', strokeWidth: 1.5 } },
            { id: 'e-p-ratio', source: 'property', target: 'ratio', type: 'straight', style: { stroke: '#22c55e', strokeWidth: 1.5 } },
        ];

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
                <h2 className="card-title">전세 구조 및 계약 관계 네트워크</h2>
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
                    <Background color="#f1f5f9" gap={20} />
                </ReactFlow>
            </div>
        </div>
    );
};

export default StructureMindMap;
