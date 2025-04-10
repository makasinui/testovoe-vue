<template>
    <header class="mx-4 py-2">
        <nav>
            <ul class="flex gap-2 text-xl">
                <RouterLink
                    class="hover:text-black/30 transition-colors"
                    to="/"
                >
                    Главная
                </RouterLink>
                <RouterLink
                    class="hover:text-black/30 transition-colors"
                    to="/convert"
                >
                    Конвертация
                </RouterLink>
            </ul>
        </nav>
    </header>
</template>
