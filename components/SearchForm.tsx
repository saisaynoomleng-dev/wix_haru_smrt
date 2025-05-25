'use client';

import Form from 'next/form';
import { Input } from './ui/input';

const SearchForm = () => {
  return (
    <Form action="/search">
      <Input name="query" placeholder="Search" />
    </Form>
  );
};

export default SearchForm;
