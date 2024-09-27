import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({setPage}) => {
    const handleNextPage = () => {
setPage(prev => prev+1)
    }
  return (
    <div className={s.container}>
      <button onClick={handleNextPage} className={s.btn}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
