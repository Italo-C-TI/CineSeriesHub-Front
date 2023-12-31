export interface SearchParams {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    onSearch: () => void;
  }

export const Search = ({ searchQuery, setSearchQuery, onSearch }: SearchParams) => {
   
    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        onSearch();
        setSearchQuery("");
      };
    return (
        <form className="group relative my-10 mx-5 flex-auto" onSubmit={handleSearch}>
            <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
             type="text" aria-label="Pesquise o filme" placeholder="Pesquise o filme..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             />     
        </form>
    )
  }