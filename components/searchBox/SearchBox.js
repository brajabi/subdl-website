import InputBox from './InputBox'
import Trends from './Trends'
import ChooseLanguage from './ChooseLanguage'

const SearchBox = ({ mode }) => (
  <>
    <InputBox mode={mode} />
    {!mode && <Trends />}
    {mode == 'searchList' && <ChooseLanguage />}
  </>
)
export default SearchBox
