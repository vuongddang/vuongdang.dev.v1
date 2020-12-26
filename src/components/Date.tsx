import { ReactElement } from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  isoString: string
}

export default function Date({ isoString }: Props): ReactElement {
  return <time dateTime={isoString}>{format(parseISO(isoString), 'LLL d, yyyy')}</time>
}
