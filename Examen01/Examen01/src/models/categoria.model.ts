import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'categoria'}}})
export class Categoria extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;
