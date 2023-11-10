"use client"
import { MdSearch } from 'react-icons/md'
import styles from './search.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Search = ({ placeholder }) => {
    const searchParams = useSearchParams();
    const { replace } = useRouter()
    const pathname = usePathname();

    const handleSearch = (e) => {
        searchParams.set("search", e.target.value)
        replace(`${pathname}?${searchParams}`)
    }

    const params = new URLSearchParams(searchParams)

    params.set("test", "value")

    replace(`${pathname}?${params}`)
    console.log(searchParams)
    console.log(pathname)

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    )
}

export default Search