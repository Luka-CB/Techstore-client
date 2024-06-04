import { useEffect } from "react";
import {
  CgPushChevronLeftR,
  CgPushChevronRightR,
  CgChevronLeftR,
  CgChevronRightR,
} from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getProducts } from "../redux/actions/productActions";
import useWindowScroll from "../hooks/useWindowScroll";

const Pagination = ({ paginationData, contentType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const queryPage = searchParams.get("page");

  const rowCount = paginationData?.page * paginationData?.limit;
  const counter = `${paginationData?.pagingCounter} - ${
    rowCount > paginationData?.totalDocs ? paginationData?.totalDocs : rowCount
  }`;

  useEffect(() => {
    if (queryPage && queryPage !== paginationData.page) {
      dispatch(getProducts({ route: contentType, page: queryPage }));
      useWindowScroll("up");
    }
  }, [queryPage]);

  const handleLastPage = () => {
    navigate({ pathname, search: `page=${paginationData.totalPages}` });
    dispatch(
      getProducts({ route: contentType, page: paginationData.totalPages })
    );

    useWindowScroll("up");
  };

  const handleNextPage = () => {
    navigate({
      pathname,
      search: `?page=${paginationData.nextPage}`,
    });

    dispatch(
      getProducts({ route: contentType, page: paginationData.nextPage })
    );

    useWindowScroll("up");
  };

  const handlePrevPage = () => {
    navigate({
      pathname,
      search: `?page=${paginationData.prevPage}`,
    });

    dispatch(
      getProducts({ route: contentType, page: paginationData.prevPage })
    );

    useWindowScroll("up");
  };

  const handleFirstPage = () => {
    navigate({ pathname, search: `page=1` });
    dispatch(getProducts({ route: contentType, page: 1 }));

    useWindowScroll("up");
  };

  return (
    <div className="pagination">
      <button
        title={paginationData.prevPage ? "First Page" : undefined}
        className="icon-btn icon-btn-left icon-btn-first"
        onClick={handleFirstPage}
        disabled={!paginationData.prevPage}
      >
        <CgPushChevronLeftR />
      </button>
      <button
        title={paginationData.prevPage ? "Previous Page" : undefined}
        className="icon-btn icon-btn-left"
        onClick={handlePrevPage}
        disabled={!paginationData.prevPage}
      >
        <CgChevronLeftR />
      </button>
      <div className="page-nums">
        <span>
          {counter} of <b>{paginationData.totalDocs}</b>
        </span>
      </div>
      <button
        title={paginationData.nextPage ? "Next Page" : undefined}
        className="icon-btn icon-btn-right"
        onClick={handleNextPage}
        disabled={!paginationData.nextPage}
      >
        <CgChevronRightR />
      </button>
      <button
        title={paginationData.nextPage ? "Last Page" : undefined}
        className="icon-btn icon-btn-right icon-btn-right icon-btn-last"
        onClick={handleLastPage}
        disabled={!paginationData.nextPage}
      >
        <CgPushChevronRightR />
      </button>
    </div>
  );
};

export default Pagination;
