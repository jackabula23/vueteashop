<template>
    <div>
      <div class="container-fluid">
        <div class="row">
          <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" href="#" to="/admin/products">
                    <span data-feather="home"></span>
                    產品列表 <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" href="#" to="/admin/orders">
                    <span data-feather="file"></span>
                    訂單列表
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" href="#" to="/admin/coupons">
                    <span data-feather="shopping-cart"></span>
                    優惠卷
                    </router-link>
                </li>
              </ul>
              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Saved reports</span>
              <a class="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
              </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <router-link class="nav-link" href="#" to="/customer_order">
                    <span data-feather="file-text"></span>
                    模擬訂單
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
</template>
