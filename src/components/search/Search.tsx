import { SearchIcon } from '@/components';
import { PLACEHOLDERS_TEXT } from '@/constants';
import styles from './search.module.scss';

interface IProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export const Search = (props: IProps) => {
  const { searchQuery, setSearchQuery } = props;

  return (
    <div className={styles.search}>
      <div className={styles.search__icon}>
        <SearchIcon />
      </div>
      <input
        type="text"
        name={PLACEHOLDERS_TEXT.search}
        className={styles.search__input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={PLACEHOLDERS_TEXT.search}
      />
    </div>
  );
};
