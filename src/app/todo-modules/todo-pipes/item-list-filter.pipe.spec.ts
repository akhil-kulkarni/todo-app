import { ItemListFilterPipe } from './item-list-filter.pipe';

describe('ItemListFilterPipe', () => {
	it('should return non-deleted objects', () => {
		const itemListFilterPipe = new ItemListFilterPipe();
		const obj = [
			{
				name: 'xyz'
			},
			{
				name: 'a',
				isDeleted: false
			},
			{
				name: 'b',
				isDeleted: true
			}
		];

		expect(itemListFilterPipe.transform(obj)).toEqual([{name: 'xyz'}, {name: 'a', isDeleted: false}]);
	});
});
