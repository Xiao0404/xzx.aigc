import { ref, onUnmounted ,onMounted} from 'vue';

export default function useIntersectionObserver(
  elementRef: { value: HTMLElement | null },
  callback: () => void
) {
  const hasMore = ref(true);
  const observer = ref<IntersectionObserver | null>(null);

  const setHasMore = (value: boolean) => {
    hasMore.value = value;
  };

  const onIntersection = ([entry]: IntersectionObserverEntry[]) => {
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
