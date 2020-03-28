import {useMemo} from 'react'

const useResource = (resourceName, format) => useMemo(() => resourceName ? require(`../assets/${resourceName}.${format ? format : 'svg'}`) : '', [resourceName]);

export default useResource;