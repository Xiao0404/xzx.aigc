import { ref, onUnmounted, onMounted } from 'vue';
export default function useIntersectionObserver(elementRef, callback) {
    const hasMore = ref(true);
    const observer = ref(null);
    const setHasMore = (value) => {
        hasMore.value = value;
    };
    const onIntersection = ([entry]) => {
        if (entry.isIntersecting && hasMore.value) {
            callback();
        }
    };
    const setupObserver = () => {
        if (elementRef.value) {
            observer.value = new IntersectionObserver(onIntersection, {
                rootMargin: '100px',
            });
            observer.value.observe(elementRef.value);
        }
    };
    const cleanupObserver = () => {
        if (observer.value) {
            observer.value.disconnect();
        }
    };
    onMounted(setupObserver);
    onUnmounted(cleanupObserver);
    return { hasMore, setHasMore };
}
