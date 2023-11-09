import Pagination from '@/app/ui/dashboard/pagination/pagination'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'

const Products = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button></Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.products}>
                                <Image src='/noproduct.jpg' alt="" width={40} height={40} className={styles.productImage}
                                />
                                Jany Doey
                            </div>
                        </td>
                        <td>Desc</td>
                        <td>$999</td>
                        <td>14.04.2023</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>

                                <Link href='/dashboard/products/test'>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><div className={styles.products}>
                            <Image src='/noproduct.jpg' alt="" width={40} height={40} className={styles.productImage}
                            />
                            John Doe
                        </div>
                        </td>
                        <td>john@mail.com</td>
                        <td>14.01.2023</td>
                        <td>client</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>

                                <Link href='/'>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default Products