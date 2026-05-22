// schemas/mediumArticle.ts
import { SchemaTypeDefinition } from 'sanity'

const Article: SchemaTypeDefinition = {
    name: 'mediumArticle',
    title: 'Artigos do Medium',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Título do Artigo',
            type: 'string',
            validation: Rule => Rule.required().error('O título é obrigatório.')
        },
        {
            name: 'excerpt',
            title: 'Linha de Apoio / Resumo',
            type: 'text',
            rows: 3,
            description: 'Uma breve introdução ou a linha de apoio do artigo para engajar o leitor no card.',
            validation: Rule => Rule.required().max(200).error('O resumo deve ter no máximo 200 caracteres.')
        },
        {
            name: 'coverImage',
            title: 'Imagem de Capa',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'A mesma imagem de capa usada no Medium (ou uma otimizada para o seu portfólio).'
        },
        {
            name: 'url',
            title: 'Link do Artigo',
            type: 'url',
            description: 'A URL completa do artigo publicado no Medium.',
            validation: Rule => Rule.required().uri({
                scheme: ['http', 'https']
            }).error('Insira uma URL válida do Medium.')
        },
        {
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'date',
            options: {
                dateFormat: 'DD/MM/YYYY',
            },
            validation: Rule => Rule.required().error('A data de publicação é necessária para ordenação.')
        },
        {
            name: 'topics',
            title: 'Tópicos / Tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            },
            description: 'Tags do artigo. Ex: Cybersecurity, Pentest, Node.js, Linux.'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'publishedAt',
            media: 'coverImage'
        },
        prepare({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle ? `Publicado em: ${subtitle}` : 'Sem data',
                media
            }
        }
    }
}

export default Article