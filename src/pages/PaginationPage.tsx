import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./pagenation.module.scss";

const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 페이지네이션 당할 대상

interface ItemsProps {
  currentItems: number[];
}

function Items({ currentItems }: ItemsProps) {
  //item 컴포넌트 페이지 단위로 나뉜 항목을 나열하겠다.
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {currentItems &&
          currentItems.map((item: number) => (
            <div key={item}>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </div>
    </>
  );
}

interface PaginationPageProps {
  itemsPerPage: number;
}

function PaginationPage({ itemsPerPage }: PaginationPageProps) {
  //itemsPerPage={5} 페이지의 항목수

  const [itemOffset, setItemOffset] = useState(0); // 현재페이지의 시작 인덱스

  const endOffset = itemOffset + itemsPerPage; // 현재 페이지의 시작 인덱스
  const currentItems = items.slice(itemOffset, endOffset); //배열에서 현재 페이지 항목 추출
  const pageCount = Math.ceil(items.length / itemsPerPage); //총 페이지 수

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `사용자가 요청한 페이지 번호는 ${event.selected}이며, 오프셋은 ${newOffset}입니다.`
    );
    setItemOffset(newOffset);
  };

  //정리
  // 페이지네이션을 할 항목(api)을 정한다.
  // 1. 시작값 끝 값을 정한다.
  //    한 페이지에 보여줄 항목의 갯수를 사용자가 정한다.
  // 2. 현재 페이지네이션 할 api의 갯수에서 유저가 정한 항목의 갯수를 나눠서 담아둔 배열
  // 3. 페이지 네이션 하단에 숫자를 카운트할 state

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.pageItem}
        activeClassName={styles.active}
        breakClassName={styles.break}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        disabledClassName={styles.disabled}
      />
    </>
  );
}

export default PaginationPage;
