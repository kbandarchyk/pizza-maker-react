export function replaceArrayElement( array: any[], index:number, newElement:any ): any[] {
    return  Object.assign([], array, { [index] : newElement } );
}

export function addNewElement( array: any[], newElement: any ) {
    return [...array, newElement ];
}