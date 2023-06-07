import { Space, Table, Tag } from 'antd'
const columns = [
	{
		title: 'Имя',
		dataIndex: 'name',
		key: 'name',
		render: text => <a>{text}</a>,
	},
	{
		title: 'Описание',
		dataIndex: 'desc',
		key: 'desc',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (_, { tags }) => (
			<>
				{tags.map(tag => {
					let color = tag.length > 5 ? 'geekblue' : 'green'
					if (tag === 'lead') {
						color = 'volcano'
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					)
				})}
			</>
		),
	},
	{
		title: 'Связаться',
		key: 'action',
		render: (_, record) => (
			<Space size='middle'>
				<a>Написать {record.name}</a>
			</Space>
		),
	},
]
const data = [
	{
		key: '1',
		name: 'Adilov Dias',
		desc: 'Я написал этот сайт :)',
		tags: ['lead', 'frontend'],
	},
	{
		key: '2',
		name: 'Nazarov Abbas',
		desc: 'Дизайнер, плохой программист и впринципе плохой дизайнер. Но хороший Азер',
		tags: ['designer'],
	},
]
const TableComponents = () => <Table columns={columns} dataSource={data} />
export default TableComponents
