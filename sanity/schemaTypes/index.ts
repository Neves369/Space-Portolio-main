import { type SchemaTypeDefinition } from 'sanity'
import project from './projects'
import article from './articles'
import security from './security'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, article, security],
}
