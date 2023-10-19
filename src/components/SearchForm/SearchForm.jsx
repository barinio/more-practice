import { AiOutlineSearch } from 'react-icons/ai';
import { Input, SearchFormStyled } from './SearchForm.styled';

const SearchForm = ({ onFormSubmit, onInputChange }) => {
  return (
    <>
      <SearchFormStyled onSubmit={onFormSubmit}>
        <button type="submit">
          <AiOutlineSearch size="24" color="white" />
        </button>
        <Input type="text" onChange={onInputChange} />
      </SearchFormStyled>
    </>
  );
};

export default SearchForm;
