import { memo, useCallback } from "react";
import { QUERY_TYPE } from "../helpers/Constants";
import { useFilters } from "../hooks/useFilters";
import { MediaType } from "../types/TmdbTypes";
import Genres from "./Genres";
import Dropdown from "./common/Dropdown";

type AdvancedFiltersProps = {
  className?: string;
  mediaType: MediaType;
};

const AdvancedFilters = memo(
  ({ className = "", mediaType }: AdvancedFiltersProps) => {
    const { updateFilters, clearFilters, filters, isFiltersActive } =
      useFilters();
    const handleGenresChange = useCallback(
      (value: string) => {
        updateFilters("with_genres", value);
      },
      [updateFilters]
    );

    const handleSortByPopularityChange = useCallback(
      (value: string) => {
        updateFilters("sort_by_vote_count", value);
      },
      [updateFilters]
    );
    return (
      <div
        className={`flex flex-col md:flex-row gap-3 bg-base-100 p-5 w-full justify-center border-black rounded-lg ${className}`}
      >
        <Genres
          mediaType={mediaType}
          value={filters.with_genres ? filters.with_genres : ""}
          onChange={handleGenresChange}
        />
        <SortByPopularity
          value={filters.sort_by_vote_count ? filters.sort_by_vote_count : ""}
          onChange={handleSortByPopularityChange}
        />
        {isFiltersActive() && (
          <button
            className="btn btn-md btn-active btn-warning rounded-xl"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        )}
      </div>
    );
  }
);

const SortByPopularity = memo(
  ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (value: string) => void;
  }) => {
    return (
      <Dropdown
        label="Sort By Popularity"
        options={[
          {
            value: QUERY_TYPE.SORT_BY.VOTE_COUNT_DESC,
            label: "Descending",
          },
          {
            value: QUERY_TYPE.SORT_BY.VOTE_COUNT_ASC,
            label: "Ascending",
          },
        ]}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default AdvancedFilters;
