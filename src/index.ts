import './styles/main.scss'
import { productsList } from './data/products'
import { Product } from './types/types'

const productContent = document.querySelector(
    '.product-content',
) as HTMLDivElement
const productBoxCatalog = document.querySelector(
    '.product-content_catalog',
) as HTMLDivElement

const specialOffers = productsList.filter((product) => product.specialOffer)
const catalogItems = productsList.filter((product) => !product.specialOffer)

const getItems = (productBox: Element, products: Product[]) => {
    products.map((product, i: number) => {
        if (i < 6) {
            const productItem = document.createElement('div')
            productItem.classList.add('product')

            const productImage = document.createElement('img')
            productImage.src = `./assets/${product.img}`
            productImage.classList.add('product-img')

            const productName = document.createElement('div')
            productName.classList.add('product-name')
            productName.textContent = product.name

            console.log(productName.textContent)

            const productDescription = document.createElement('p')
            productDescription.classList.add('product-text')
            productDescription.textContent = product.description

            const productPriceBox = document.createElement('div')
            productPriceBox.classList.add('product-price_box')

            const productPrice = document.createElement('span')
            productPrice.classList.add('product-price')
            productPrice.textContent = product.price.toString()

            const productSalePrice = document.createElement('span')

            if (product.specialOffer) {
                productSalePrice.classList.add(
                    'product-price',
                    'product-price-sale',
                )
                productSalePrice.textContent =
                    product.salePrice?.toString() ||
                    "We'll get back with updated pruce to you later"
            }

            productPriceBox.append(productPrice)
            productPriceBox.append(productSalePrice)

            productItem.append(productImage)
            productItem.append(productName)
            productItem.append(productDescription)
            productItem.append(productPriceBox)

            productBox.append(productItem)
        }
    })
}

getItems(productContent, specialOffers)
getItems(productBoxCatalog, catalogItems)
