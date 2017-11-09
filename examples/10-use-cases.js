module.exports = function (migration) {
  const page = migration.editContentType('page');

  page.createField('carousel')
    .type('Link')
    .linkType('Entry')
    .name('Carousel')
    .validations([{ linkContentType: ['carousel'] }]);

  page.deleteField('products');

  const carousel = migration.createContentType('carousel')
    .name('Product Carousel')
    .description('Products carousel navigation');

  carousel.createField('name')
    .type('Symbol')
    .name('Carousel');

  carousel.createField('products', {
    name: 'Products',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        { linkContentType: ['product'] }
      ]
    }
  });

  const review = migration.createContentType('review')
    .name('Review')
    .description('Product review');

  review.displayField('title');

  review.createField('title')
    .type('Symbol')
    .name('Title');

  review.createField('blocks', {
    name: 'Text Image Blocks',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        { linkContentType: ['imageBlock', 'textBlock', 'textImageBlock'] }
      ]
    }
  });

  const product = migration.editContentType('product');

  product.createField('reviews', {
    name: 'Product Reviews',
    type: 'Array',
    items: {
      type: 'Link',
      linkType: 'Entry',
      validations: [
        { linkContentType: ['review'] }
      ]
    }
  });

  const textImageBlock = migration.createContentType('textImageBlock')
    .name('Text + Image Block')
    .description('Text + Image component');

  textImageBlock.createField('text')
    .type('Text')
    .name('Text');

  textImageBlock.createField('image')
    .type('Link')
    .linkType('Asset')
    .name('Image');

  const imageBlock = migration.createContentType('imageBlock')
    .name('Image Block')
    .description('Image component');

  imageBlock.createField('image')
    .type('Link')
    .linkType('Asset')
    .name('Image');

  const textBlock = migration.createContentType('textBlock')
    .name('Text Block')
    .description('Text component');

  textBlock.createField('text')
    .type('Text')
    .name('Text');

  const siteSetup = migration.createContentType('siteSetup')
    .name('Site Setup')
    .description('Site Setup');

  siteSetup.createField('title')
    .type('Symbol')
    .name('Title');

  siteSetup.displayField('title');
};
