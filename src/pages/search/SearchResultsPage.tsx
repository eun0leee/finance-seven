import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SearchBox from './SearchComponents/SearchBox';
import CategoryTab from './SearchResultsComponents/CategoryTab';
import ResultsTotal from './SearchResultsComponents/ResultsTotal';
import ResultsCard from './SearchResultsComponents/ResultsCard';
import ResultsLoan from './SearchResultsComponents/ResultsLoan';
import ResultsSavings from './SearchResultsComponents/ResultsSavings';
import ResultsSubscription from './SearchResultsComponents/ResultsSubscription';

import { useDispatch } from 'react-redux';
import { getSearchResults } from '../../common/api/Api';
import { addCardResults, addLoanResults, addSavingsResults, addSubscriptionResults } from '../../store/searchSlice';

const SearchResults = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [keywordParams, setKeywordParams] = useState('');

  //키워드 setState
  useEffect(() => {
    params.keywords !== undefined && setKeywordParams(params.keywords);
  }, [params]);

  //params로 업데이트된 키워드로 api호출해서 검색결과 가져오기.
  //리덕스 store에 결과 저장하기. 탭이 바뀌기 때문에 저장 필요.
  useEffect(() => {
    const getServerResultData = async () => {
      const cardData = await getSearchResults(keywordParams, 'card', 1);
      dispatch(addCardResults(cardData.resultData));
      const loanData = await getSearchResults(keywordParams, 'loan', 1);
      dispatch(addLoanResults(loanData.resultData));
      const savingsData = await getSearchResults(keywordParams, 'savings', 1);
      dispatch(addSavingsResults(savingsData.resultData));
      const subscriptionData = await getSearchResults(keywordParams, 'subscription', 1);
      dispatch(addSubscriptionResults(subscriptionData.resultData));
    };
    keywordParams && getServerResultData();
  }, [keywordParams]);

  const [tabIndex, setTabIndex] = useState(0);
  const category = [
    { category: 'total', title: '통합', content: <ResultsTotal setTabIndex={setTabIndex} /> },
    { category: 'card', title: '카드', content: <ResultsCard /> },
    { category: 'loan', title: '대출', content: <ResultsLoan /> },
    { category: 'savings', title: '예적금', content: <ResultsSavings /> },
    { category: 'subscription', title: '청약', content: <ResultsSubscription /> },
  ];

  return (
    <Container>
      <Wrab>
        <SearchBox />
        <CategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} categoryArr={category} isOnAllPage={false} />
      </Wrab>
      {category
        .filter((list, index) => index === tabIndex)
        .map((list) => (
          <CategoryDesc key={list.title}>{list.content}</CategoryDesc>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 106px;

  li {
    cursor: pointer;
  }
`;

const Wrab = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: fit-content;
  background-color: #fff;
`;

const CategoryDesc = styled.div``;

export default SearchResults;
