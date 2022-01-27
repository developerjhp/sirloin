import 'utils/styles/Menulist.scss';
function Menulist() {
  return (
    <>
      <ul className='menu-list'>
        <li className='menu-item'>
          <span>기본 설정</span>
        </li>
        <li className='menu-item'>
          <span>회원</span>
        </li>
        <li className='menu-item'>
          <span>진열</span>
        </li>
        <li className='menu-item'>
          <span>상품</span>
        </li>
        <ul className='menu-sub-list'>
          <li className='menu-sub-item'>
            <span>상품 리스트</span>
          </li>
          <li className='menu-sub-item'>
            <span>상품 재고 관리</span>
          </li>
          <li className='menu-sub-item sub-item-choice'>
            <span>상품 등록</span>
          </li>
        </ul>

        <li className='menu-item'>
          <span>주문</span>
        </li>
        <li className='menu-item'>
          <span>배송</span>
        </li>
        <li className='menu-item'>
          <span>프로모션</span>
        </li>
        <li className='menu-item'>
          <span>혜택</span>
        </li>
        <li className='menu-item'>
          <span>고객 센터 관리</span>
        </li>
        <li className='menu-item'>
          <span>알림</span>
        </li>
      </ul>
    </>
  );
}

export default Menulist;
