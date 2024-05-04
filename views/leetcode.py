def minSubArrayLen(target, nums):
    n = len(nums)
    s = nums[0]
    ans = set()
    i, j = 0, 0
    while i < n and j < n and i <= j:
        print(nums[i:j+1], target, s, i, j)
        if s == target:
            ans.add(j-i+1)
            print(nums[i:j+1], target, s)
            j += 1
            if j < n:
                s += nums[j]
        elif s > target and i < j and i < n-1:
            print('if2')
            s -= nums[i]
            i += 1

        else:
            print('else')
            j += 1
            if j < n:
                s += nums[j]
    print(ans)
    if len(ans) == 0:
        return 0
    return min(ans)


print(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 12]))
