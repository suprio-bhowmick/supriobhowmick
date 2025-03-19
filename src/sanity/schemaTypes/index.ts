import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import about from './about'
import contact from './contact'
import hero from './hero'
import qualification from './qualification'
import skill from './skill'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, about, contact, hero, qualification,skill, project],
}
