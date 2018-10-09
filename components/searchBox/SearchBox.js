// Locals
import InputBox from './InputBox'
import Trends from './Trends'
import ChooseLanguage from './ChooseLanguage'
import Space from '../shared/Space'

const SearchBox = ({ mode }) => (
  <>
    {!mode && <Space height="30" />}
    <InputBox mode={mode} />
    {!mode && <Trends />}
    {mode == 'searchList' && <ChooseLanguage />}
  </>
)
export default SearchBox
