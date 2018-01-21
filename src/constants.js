import get from 'lodash/get'

const production = get(process, 'env.NODE_ENV')

export const dataSource = production ? 'data' : 'data'
