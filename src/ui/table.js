export class Table {
    #schema //array of objects {columnName: <string>, fieldName: <schema>}
    #tbodyElement
    constructor(parentId, tableName, schema) {//      table-section
        const parentElement = document.getElementById(parentId);
        this.#schema = schema;
        if (!parentElement) {
            throw `wrong parentId ${parentId}`// ask in webinar
        }
        parentElement.innerHTML =
            ` <h3 class="table-logo">${tableName} </h3>
            <table>
                <thead>
                    <tr>
                        ${getHeader(schema)}

                    </tr>
                </thead>
                <tbody id="${tableName}">
                    
                </tbody>
            </table>`
        this.#tbodyElement = document.getElementById(tableName);
    }
    addRow(object) {
        this.#tbodyElement.innerHTML += getRow(object, this.#schema);
    }
}
function getHeader(schema) {
    return schema.map(obj => `<th>${obj.columnName}</th>`).join('');
}
function getRow(data, schema) {
    return `<tr> ${getTds(data, schema)}</tr>`
}
function getTds(data, schema) {
    return schema.map(obj => `<td>${data[obj.fieldName]}</td>`).join('');
}