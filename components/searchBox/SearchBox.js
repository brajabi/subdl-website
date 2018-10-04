import InputBox from './InputBox'
import Trends from './Trends'
import ChooseLanguage from './ChooseLanguage'

const SearchBox = ({ fullWidth }) => (
  <>
    <InputBox fullWidth={fullWidth} />

    {fullWidth ? <ChooseLanguage /> : <Trends />}
  </>
)
export default SearchBox
