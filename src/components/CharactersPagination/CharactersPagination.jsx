import s from './CharactersPagination.module.scss';

const LIMIT = 10;

const CharactersPagination = ({
                                page,
                                total,
                                onChange = () => {
                                }
                              }) => {
  const totalPages = Math.ceil(total / LIMIT);
  return (
    <div className={s.wrapper}>
      {Array.from({length: totalPages}, (_, index) => index + 1)
        .map(pageIndex => {
            const isActive = pageIndex === page;
            const action = () => pageIndex !== page && onChange(pageIndex);

            return isActive ? (
                <span key={pageIndex} onClick={action}><b>{pageIndex}</b></span>
              ) :
              (
                <span key={pageIndex} onClick={action}>{pageIndex}</span>
              );
          }
        )}
    </div>
  );
};

export default CharactersPagination;