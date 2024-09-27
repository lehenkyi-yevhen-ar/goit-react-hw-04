import { Hourglass } from "react-loader-spinner"
import s from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={s.container}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#008080", "#72a1ed"]}
      />
    </div>
  )
}

export default Loader
