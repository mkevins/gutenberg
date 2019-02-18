const name = 'core/paragraph';

export default function onReplace( blocks ) {
	const { attributes, onReplace: parentOnReplace } = this.props;

	parentOnReplace( blocks.map( ( block, index ) => (
		index === 0 && block.name === name ?
			{
				...block,
				attributes: {
					...attributes,
					...block.attributes,
				},
			} :
			block
	) ) );
}
