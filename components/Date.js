import { parseISO, format } from 'date-fns';
import { Text } from './UIKit';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <Text size='caption' dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </Text>
  );
}
