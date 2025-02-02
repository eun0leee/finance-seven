import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReducerType } from '../../../store/store';
import { useSelector } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import { IoChevronBackOutline } from 'react-icons/io5';
import { addSearchKeywords } from '../../../common/api/Api';

const SearchBox = () => {
  //자동저장 on/off 상태 값
  const isToggleTrue = useSelector<ReducerType>((state) => state.autosave.isToggleTrue);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const findResultsPage = location.pathname.slice(0, 8) === '/search/';

  //검색결과 페이지에서 검색바에 키워드 보여주기
  useEffect(() => {
    params.keywords !== undefined && setInputValue(params.keywords);
  }, []);

  //검색결과 페이지에서만 뒤로가기 버튼 보여줌. 검색페이지로 이동하는 버튼.
  const handleBack = () => {
    navigate('/search');
  };

  //검색 submit 되면, 페이지 이동 및 자동저장 여부에 따라 키워드 저장 api 호출
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const movepageAndAddkeywordAndCallApi = () => {
      navigate(`/search/${inputValue}`);
      isToggleTrue && addSearchKeywords(inputValue);
    };

    inputValue !== '' ? movepageAndAddkeywordAndCallApi() : alert('상품명을 입력해주세요.');
  };

  //키워드가 있을 때만, 키워드삭제 버튼 보여주려고 사용
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  //키워드 삭제 버튼
  const handleDeleteBtn = () => {
    setInputValue('');
  };

  return (
    <Container onSubmit={handleSubmit} className={findResultsPage ? 'results' : ''}>
      {/* 검색결과에서만 뒤로가기 버튼 보이기 */}
      {findResultsPage ? (
        <IoChevronBackOutline size="22" color="#353D4A" onClick={handleBack} style={{ marginLeft: '-8px' }} />
      ) : null}
      <div>
        <span className="search">
          <BiSearch />
        </span>
        <input type="text" placeholder="필요한 상품을 찾아보세요" value={inputValue} onChange={handleInputChange} />
        {/* 검색바에 글자 있을 때만 삭제버튼 노출 */}
        {inputValue !== '' ? (
          <button type="button" className="delete" onClick={handleDeleteBtn}>
            <TiDelete />
          </button>
        ) : null}
      </div>
    </Container>
  );
};

const Container = styled.form`
  position: fixed;
  top: 56px;

  width: calc(100vw - 40px);
  max-width: 728px;
  padding: 14px 0;
  background-color: #fff;

  div {
    position: relative;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    right: 15px;
  }

  span,
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-45%);

    font-size: 20px;
    color: var(--gray-color);

    &.search {
      left: 15px;
    }
  }

  input {
    width: 100%;
    height: var(--input-height);
    padding: 14px 40px;
    border-radius: 20px;
    border: none;
    background-color: var(--lightgray-color);
    font-size: var(--font-m);

    &::placeholder {
      color: #8c949f;
      font-size: var(--font-m);
    }

    &:focus {
      outline: none;
    }
  }

  &.results {
    top: 0;

    display: flex;
    align-items: center;
    gap: 10px;

    margin: 0 20px;

    div {
      width: 100%;
    }
  }
`;

export default SearchBox;
