import { SearchIcon } from '@/components';
import styles from './search.module.scss';

interface IProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  placeholder: string;
}

export const Search = (props: IProps) => {
  const { searchQuery, setSearchQuery, placeholder } = props;

  return (
    <div className={styles.search}>
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
    </div>
  );
};
