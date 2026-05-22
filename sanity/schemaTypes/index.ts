import { type SchemaTypeDefinition } from 'sanity'
import project from './projects'
import article from './articles'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, article],
}
