/** @jsx jsx */
import { jsx, Text, Flex } from 'theme-ui';
import { FaInfoCircle } from 'react-icons/fa';

export function Tip({ children }) {
  return (
    <Flex sx={{ backgroundColor: 'muted', p: 3 }}>
      <FaInfoCircle
        sx={{ width: '20px', height: '20px', mt: 1, mr: 2 }}
      />
      <Text variant="body" sx={{ flex: 1 }}>
        {children}
      </Text>
    </Flex>
  );
}
