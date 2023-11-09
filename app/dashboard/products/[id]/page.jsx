import styles from '@/app/ui/dashboard/products/singleproduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/noavatar.png' alt="" fill />
                </div>
                IPhone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder='John Doe' />
                    <label>Price</label>
                    <input type="number" name="price" placeholder='$999' />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder='44' />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder='+1(555)123-4567' />
                    <label>Color</label>
                    <input type="text" name="color" placeholder='Titanium' />
                    <label>Size</label>
                    <input type="number" name="size" placeholder='Large' />
                    <label>Categories</label>
                    <select name="cat" id="cat">
                        <option value="Digital printing">Printing</option>
                        <option value="Stickers">Stickers</option>
                        <option value="Banners">Banners</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder='description'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage;