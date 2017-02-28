<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
       @include('includes.head')
    </head>
    <body>
    @yield('content')
    @include('includes.footer')
