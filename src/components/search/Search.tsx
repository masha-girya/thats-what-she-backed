import { FormEvent } from 'react';
import { SearchIcon } from '@/components';
import styles from './search.module.scss';

interface IProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  placeholder: string;
  handleSubmit?: () => void;
}

export const Search = (props: IProps) => {
  const { searchQuery, setSearchQuery, placeholder, handleSubmit } = props;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleSubmit) {
      handleSubmit();
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.search}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <input
        type="text"
        name={placeholder}
        className={styles.search__input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};
