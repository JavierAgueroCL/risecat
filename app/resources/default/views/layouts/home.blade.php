<!doctype html>
<html class="no-js" lang="{{ config('app.locale') }}">
    <head>
       @include('includes.head')
    </head>
    <body>
      @include('includes.topbar')
      @include('includes.navigation')
    <main class="wrapper">
      @include('includes.sidebar')
      @include('includes.slider')
      @yield('content')
    </main>
      @include('includes.footer')
