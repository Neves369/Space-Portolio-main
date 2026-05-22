import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projetos',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título do Projeto',
            type: 'string',
            validation: Rule => Rule.required().error('O título é obrigatório.')
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'summary',
            title: 'Resumo Simples',
            type: 'string',
            description: 'Uma frase curta para listagens e cards no portfólio.',
            validation: Rule => Rule.required().max(150)
        }),
        defineField({
            name: 'description',
            title: 'Descrição Completa',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Explique o desafio, a solução que você desenvolveu e a arquitetura.'
        }),
        defineField({
            name: 'mainImage',
            title: 'Imagem de Capa',
            type: 'image',
            options: {
                hotspot: true, // Permite recortar a imagem diretamente pelo painel
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Galeria de Capturas de Tela',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            description: 'Prints do app rodando, dashboards ou telas principais.'
        }),
        defineField({
            name: 'projectType',
            title: 'Tipo de Projeto',
            type: 'string',
            options: {
                list: [
                    { title: 'Mobile (App)', value: 'mobile' },
                    { title: 'Web Application', value: 'web' },
                    { title: 'Desktop', value: 'desktop' },
                    { title: 'Full-Stack System', value: 'fullstack' },
                    { title: 'IoT / Hardware', value: 'iot' },
                    { title: 'Ferramenta / CLI', value: 'cli' }
                ],
                layout: 'radio' // Exibe como botões de rádio para seleção rápida
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'tags',
            title: 'Tecnologias (Tags)',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags' // Transforma a inserção em formato de tags visuais
            },
            description: 'Ex: React Native, NestJS, Docker, RealmDB, TypeScript.'
        }),
        defineField({
            name: 'links',
            title: 'Links do Projeto',
            type: 'object',
            fields: [
                defineField({
                    name: 'github',
                    title: 'Repositório GitHub',
                    type: 'url'
                }),
                defineField({
                    name: 'live',
                    title: 'Link de Produção (Live Demo / Store)',
                    type: 'url'
                })
            ]
        }),
        defineField({
            name: 'featured',
            title: 'Destacar no Portfólio?',
            type: 'boolean',
            initialValue: false,
            description: 'Ative para exibir este projeto na seção principal da sua home.'
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM'
            }
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'projectType',
            media: 'mainImage'
        }
    }
})