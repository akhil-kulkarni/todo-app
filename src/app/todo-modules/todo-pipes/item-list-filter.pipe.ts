import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'itemListFilter',
	pure: false
})
export class ItemListFilterPipe implements PipeTransform {

	transform(objects?: any): any {
		if (objects) {
			return objects.filter(object => {
					return !object.isDeleted;
			});
	}
	}

}
